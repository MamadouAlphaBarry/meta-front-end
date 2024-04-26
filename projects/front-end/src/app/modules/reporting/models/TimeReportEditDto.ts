//import { Date } from 'js-joda';

export interface TimeReportEditDto {
    /** Identifiant du rapport temporel. */
    id: number;
    /** Date de création du rapport temporel. */
    createdAt: Date;
    /** Date de mise à jour du rapport temporel. */
    updatedAt: Date;
    /** Date du rapport temporel. */
    date: Date;
    /** Nombre de minutes rapportées. */
    minutes: number;
    /** Nombre d'heures supplémentaires. */
    overtime: number;
    /** Description du rapport temporel. */
    description: string;
    /** Type d'heures supplémentaires. */
    overtimeType: number;
    /** Statut du rapport temporel. */
    status: string;
    /** Identifiant de la ressource associée au rapport temporel. */
    resourceId: number;
    /** Identifiant du travail associé au rapport temporel. */
    jobId: number;
    /** Temps de déplacement rapporté. */
    traveltime: number;
    /** Indique si le travail a été effectué hors site. */
    offsite: boolean;
    /** Identifiant de la personne en charge du rapport temporel. */
    managedBy: number;
    /** Indique si le rapport a été renversé. */
    overturned: boolean;
    /** Disponibilité du rapport temporel. */
    availability: number;

    
}


