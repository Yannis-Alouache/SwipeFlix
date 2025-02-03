import { IdProvider } from "../domain/ports/id-provider";

export class IdProviderInMemory implements IdProvider  {

    constructor(
        private readonly id: string
    ) {}

    generate(): string {
        return this.id;
    }
}