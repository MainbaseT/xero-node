
export class TimesheetEarningsLine {
    /**
    * Xero identifier for payroll timesheet earnings rate
    */
    'earningsRateID'?: string;
    /**
    * Rate per unit for timesheet earnings line
    */
    'ratePerUnit'?: number;
    /**
    * Timesheet earnings number of units
    */
    'numberOfUnits'?: number;
    /**
    * Timesheet earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed
    */
    'fixedAmount'?: number;
    /**
    * The amount of the timesheet earnings line.
    */
    'amount'?: number;
    /**
    * Identifies if the timesheet earnings is taken from the timesheet. False for leave earnings line
    */
    'isLinkedToTimesheet'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "earningsRateID",
            "baseName": "earningsRateID",
            "type": "string"
        }        {
            "name": "ratePerUnit",
            "baseName": "ratePerUnit",
            "type": "number"
        }        {
            "name": "numberOfUnits",
            "baseName": "numberOfUnits",
            "type": "number"
        }        {
            "name": "fixedAmount",
            "baseName": "fixedAmount",
            "type": "number"
        }        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        }        {
            "name": "isLinkedToTimesheet",
            "baseName": "isLinkedToTimesheet",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TimesheetEarningsLine.attributeTypeMap;
    }
}

