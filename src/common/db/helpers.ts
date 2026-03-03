import { SelectQueryBuilder } from "typeorm";

export function qdDateInterval<Entity>(
    qb: SelectQueryBuilder<Entity>,
    datePropertyName: string,
    minDate?: Date,
    maxDate?: Date,
) {
    if (minDate)
        qb.andWhere(`${datePropertyName} >= :minDate`, {minDate} );
    if (maxDate)
        qb.andWhere(`createdAt <= :maxDate`, {maxDate});
    return qb;
}