"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../athoms";

export function SiteBreadCrumb() {
  const pathname = usePathname();

  // Si estamos en la ruta raíz, solo mostramos el ícono de Home
  if (pathname === "/") {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>
              <Home className="h-4 w-4" />
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  // Dividir la ruta en segmentos y filtrar vacíos
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <Breadcrumb className="capitalize">
      <BreadcrumbList>
        {/* Siempre incluir el enlace a Home */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          // Capitalizar la primera letra del segmento para mostrar
          const displayName =
            segment.charAt(0).toUpperCase() +
            segment.slice(1).replace(/-/g, " ");

          return (
            <div key={href} className="flex items-center">
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{displayName}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{displayName}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
