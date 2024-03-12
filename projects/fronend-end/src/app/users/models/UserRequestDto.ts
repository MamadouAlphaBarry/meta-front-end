// Note: TypeScript does not have built-in decorators for validation or automatic getter/setter generation like Java with Lombok.
// You would typically use a library like class-validator for validation and manually define getters and setters.

export interface UserRequestDto {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    username: string;
    firstName: string;
    lastName: string;
    title: string;
    displayName: string;

    // Getters and Setters need to be manually defined if needed
}


