import { Button } from "@/modules/ui/athoms";
import { CardWrapper } from "@/modules/ui/molecules/CardWrapper";
import { RootInput } from "@/modules/ui/molecules/RootInput";
import { ThemeToggle } from "@/modules/ui/molecules/ThemeToggle";
import { Lock, Rocket, User } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex-center min-h-screen w-full flex-col pb-24 px-4">
      <ThemeToggle />
      <h1 className="heading-gradient">
        Hey its a very long text with gradients
      </h1>
      <div className="container mx-auto w-full flex-center mt-24 gap-4">
        <div className="size-12 border-2 rounded-lg flex-center bg-background text-foreground">
          <h2>Bg</h2>
        </div>
        <div className="size-12 border-2 rounded-lg flex-center bg-primary text-primary-foreground">
          <h2>Pri</h2>
        </div>
        <div className="size-12 border-2 rounded-lg flex-center bg-secondary text-secondary-foreground">
          <h2>Sec</h2>
        </div>
        <div className="size-12 border-2 rounded-lg flex-center bg-ring text-ring-foreground">
          <h2>Ring</h2>
        </div>
        <div className="size-12 border-2 rounded-lg flex-center bg-card text-card-foreground">
          <h2>Crd</h2>
        </div>
        <div className="size-12 border-2 rounded-lg flex-center bg-muted text-muted-foreground">
          <h2>Mut</h2>
        </div>
        <div className="size-12 border-2 rounded-lg flex-center bg-accent text-accent-foreground">
          <h2>Acc</h2>
        </div>
        <div className="size-12 border-2 rounded-lg flex-center bg-destructive text-destructive-foreground">
          <h2>Dest</h2>
        </div>
        <div className="size-12 border-2 rounded-lg flex-center bg-warning text-warning-foreground">
          <h2>Wrn</h2>
        </div>
        <div className="size-12 border-2 rounded-lg flex-center bg-success text-success-foreground">
          <h2>Suc</h2>
        </div>
      </div>
      <div className="flex-center gap-6 w-full flex-wrap container mx-auto bg-card rounded-lg border min-h-24 mt-24 p-6">
        <div className="w-full bg-muted flex-center p-6 flex-wrap gap-2">
          <Button> Primary</Button>
          <Button variant={"secondary"}> Secundary</Button>
          <Button variant={"destructive"}> Destructive</Button>
          <Button variant={"ghost"}> Ghost</Button>
          <Button variant={"link"}> Link</Button>
          <Button variant={"outline"}> Outline</Button>
        </div>
        <div className="w-full bg-muted flex-center p-6 flex-wrap gap-2">
          <Button size={"icon"}>
            <Rocket />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            {" "}
            <Rocket />
          </Button>
          <Button variant={"destructive"} size={"icon"}>
            {" "}
            <Rocket />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            {" "}
            <Rocket />
          </Button>
          <Button variant={"link"} size={"icon"}>
            {" "}
            <Rocket />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            {" "}
            <Rocket />
          </Button>
        </div>{" "}
        <div className="w-full bg-accent flex-center p-6 flex-wrap gap-2">
          <Button size={"lg"}>
            <Rocket /> Button
          </Button>
          <Button variant={"secondary"} size={"lg"}>
            {" "}
            <Rocket /> Button
          </Button>
          <Button variant={"destructive"} size={"lg"}>
            {" "}
            <Rocket /> Button
          </Button>
          <Button variant={"ghost"} size={"lg"}>
            {" "}
            <Rocket /> Button
          </Button>
          <Button variant={"link"} size={"lg"}>
            {" "}
            <Rocket /> Button
          </Button>
          <Button variant={"outline"} size={"lg"}>
            {" "}
            <Rocket /> Button
          </Button>
        </div>
      </div>
      <div className="bg-card border min-h-24 container mx-auto w-full mt-24 rounded-lg flex-center p-8">
        <RootInput label="Tag" htmlFor="tag" icon={User} />
      </div>
      <CardWrapper
        title={"Elementos"}
        description="Card Wrapper"
        actions={<Button>Boton</Button>}
        footer="Sdsdaed"
        markableContent
      >
        <RootInput
          icon={Lock}
          type="password"
          htmlFor="password"
          label="Password"
        />
      </CardWrapper>
    </div>
  );
};

export default HomePage;
