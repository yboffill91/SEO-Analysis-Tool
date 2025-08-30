import React from "react";

const HomePage = () => {
  return (
    <div className="flex-center min-h-screen w-full flex-col">
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
    </div>
  );
};

export default HomePage;
