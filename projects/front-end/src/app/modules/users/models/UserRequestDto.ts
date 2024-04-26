// Note: TypeScript does not have built-in decorators for validation or automatic getter/setter generation like Java with Lombok.
// You would typically use a library like class-validator for validation and manually define getters and setters.

import { Title } from "@angular/platform-browser";

export interface UserRequestDto {
   
   // name: string;
    email: string|null;
    password: string|null;
    confirm: string;
   // createdAt: Date;
   // username: string;
    firstName: string|null;
    lastName: string|null;
    title: string|null;
    displayName: string|null;

    // Getters and Setters need to be manually defined if needed
}


