import { BigDecimal } from 'js-big-decimal'; // Assuming an external library for BigDecimal handling in TypeScript

export interface UserDtoRequest {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    costMinimum: BigDecimal;
    costMedium: BigDecimal;
    costMaximum: BigDecimal;
    costReal: BigDecimal;
    businessUnitId: number;
    codFiscale: string;
    matricola: string;
    dataInizioRapporto: Date;
    inquadramento: string;
    profiloOrario: string;
    hasAvailability: boolean;
    hasOvertime: boolean;
    deletedAt: Date;
    ral: BigDecimal;
    extra: BigDecimal;
    welfare: BigDecimal;
    premi: BigDecimal;
    auto: BigDecimal;
    qualifica: string;
    consulenteType: string;
    companyId: number;
    supervisorId: number;
    hasProfiloOrario: boolean;
    hasTransfers: boolean;
    fake: boolean;
    hasAbsences: boolean;
    dataFineRapporto: Date;
    profiloVerticale: boolean;
    patronDate: Date;
    educational: string;
    ccnlDataId: number;
    companyCost: BigDecimal;
    employmentLetter: string;
    orarioLun: number;
    orarioMar: number;
    orarioMer: number;
    orarioGio: number;
    orarioVen: number;
    orarioSab: number;
    orarioDom: number;
    iban: string;
    enableExpenses: boolean;

    // Getters and setters can be implemented as TypeScript properties with getters and setters
}


