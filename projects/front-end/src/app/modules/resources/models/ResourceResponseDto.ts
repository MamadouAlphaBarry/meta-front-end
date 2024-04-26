import { LocalDateTime } from '@js-joda/core';
//import { BigDecimal } from '@'; // Assuming an external library for BigDecimal
//import { Date } from 'date-fns'; // Assuming date-fns for Date handling, if needed

export interface ResourceResponseDto {
    id: number;
    createdAt: LocalDateTime;
    updatedAt: LocalDateTime;
    userId: number;
    costMinimum: number;
    costMedium: number;
    costMaximum: number;
    costReal: number;
    businessUnitId: number;
    codFiscale: string;
    matricola: string;
    dataInizioRapporto: Date;
    inquadramento: string;
    profiloOrario: string;
    hasAvailability: boolean;
    hasOvertime: boolean;
    deletedAt: Date;
    ral: number;
    extra: number;
    welfare: number;
    premi: number;
    auto: number;
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
    companyCost: number;
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
    // Getters and setters are not typically explicitly defined in TypeScript classes as they are in Java. 
    // Access to properties is usually direct unless specific logic is needed for getting/setting a property.
}


