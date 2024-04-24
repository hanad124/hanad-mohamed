// ** React imports ***
import React from "react";

// ** Third party imports ***
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Contact = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact</CardTitle>
        {/* <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription> */}
      </CardHeader>
      <CardContent className="space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quasi, necessitatibus unde tempore dolore quaerat voluptates eveniet
          ab veniam officiis!
        </p>
      </CardContent>
    </Card>
  );
};

export default Contact;
