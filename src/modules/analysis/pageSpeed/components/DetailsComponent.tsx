import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/modules/ui/athoms";

interface Heading {
  key: string;
  label: string;
  valueType?: string;
}

export interface AuditDetails {
  type: string;
  items?: Record<string, any>[];
  headings?: Heading[];
  overallSavingsMs?: number;
  overallSavingsBytes?: number;
  debugData?: Record<string, any>;
  node?: { snippet?: string; selector?: string };
}

export default function AuditDetailsRenderer({
  details,
}: {
  details: AuditDetails;
}) {
  if (!details) return null;

  if (
    ["screenshot", "filmstrip", "criticalrequestchain"].includes(details.type)
  ) {
    return null;
  }

  return (
    <Card className="p-4 mb-4 border-0 ">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-semibold">Audit Details</h3>
        <Badge variant="outline">{details.type}</Badge>
      </div>

      {details.type === "table" || details.type === "opportunity" ? (
        <>
          {details.items && details.items.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  {details.headings?.map((h) => (
                    <TableHead key={h.key}>{h.label}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {details.items.map((item, i) => (
                  <TableRow key={i}>
                    {details.headings?.map((h) => (
                      <TableCell key={h.key}>
                        {renderCell(item[h.key], h.valueType)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-sm text-muted-foreground">No items</p>
          )}
          {details.overallSavingsMs !== undefined && (
            <p className="text-sm text-warning bg-warning/5 px-2 py-1 rounded mt-2">
              Potential savings: {details.overallSavingsMs} ms •{" "}
              {details.overallSavingsBytes} bytes
            </p>
          )}
        </>
      ) : details.type === "diagnostic" || details.type === "debugdata" ? (
        <Accordion type="single" collapsible>
          <AccordionItem value="debug">
            <AccordionTrigger>Debug Data</AccordionTrigger>
            <AccordionContent>
              <pre className="text-xs bg-muted p-2 rounded-md overflow-x-auto">
                {JSON.stringify(details.debugData ?? details, null, 2)}
              </pre>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : details.type === "node" ? (
        <div className="bg-muted p-3 rounded-md">
          <code className="text-xs">{details.node?.snippet}</code>
          {details.node?.selector && (
            <p className="text-xs text-muted-foreground mt-1">
              Selector: {details.node.selector}
            </p>
          )}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Unsupported details type: {details.type}
        </p>
      )}
    </Card>
  );
}

/**
 * Renderizador de valores de celda según `valueType`
 */
function renderCell(value: any, valueType?: string) {
  if (value == null) return "-";

  // Si el valor es un objeto, tratamos según su tipo
  if (typeof value === "object") {
    // Caso especial: source-location
    if (value.type === "source-location") {
      return (
        <div className="flex flex-col text-xs">
          <a
            href={value.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {value.url}
          </a>
          <span className="text-muted-foreground">
            Line {value.line}, Col {value.column}
          </span>
        </div>
      );
    }

    // Render genérico (fallback)
    return (
      <pre className="text-xs bg-muted p-1 rounded overflow-x-auto">
        {JSON.stringify(value, null, 2)}
      </pre>
    );
  }

  // Renderizado normal según valueType
  switch (valueType) {
    case "url":
      return (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {value}
        </a>
      );
    case "bytes":
      return `${(value / 1024).toFixed(1)} KB`;
    case "ms":
      return `${value} ms`;
    case "code":
      return (
        <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
          {String(value)}
        </code>
      );
    default:
      return String(value);
  }
}
