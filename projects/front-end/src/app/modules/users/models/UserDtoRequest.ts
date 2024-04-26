//import { BigDecimal } from 'js-big-decimal'; // Assuming an external library for BigDecimal handling in TypeScript

import { LocalDateTime } from "@js-joda/core";

export interface UserDtoRequest {
    id: number;
    createdAt: LocalDateTime;
    updatedAt: Date;
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

    // Getters and setters can be implemented as TypeScript properties with getters and setters
}


