
export class EarningsLine {
    /**
    * Xero identifier for payroll earnings line
    */
    'earningsLineID'?: string;
    /**
    * Xero identifier for payroll earnings rate
    */
    'earningsRateID'?: string;
    /**
    * name of earnings rate for display in UI
    */
    'displayName'?: string;
    /**
    * Rate per unit for earnings line
    */
    'ratePerUnit'?: number;
    /**
    * Earnings number of units
    */
    'numberOfUnits'?: number;
    /**
    * Earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed
    */
    'fixedAmount'?: number;
    /**
    * The amount of the earnings line.
    */
    'amount'?: number;
    /**
    * Identifies if the earnings is taken from the timesheet. False for earnings line
    */
    'isLinkedToTimesheet'?: boolean;
    /**
    * Identifies if the earnings is using an average daily pay rate
    */
    'isAverageDailyPayRate'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "earningsLineID",
            "baseName": "earningsLineID",
            "type": "string"
        }        {
            "name": "earningsRateID",
            "baseName": "earningsRateID",
            "type": "string"
        }        {
            "name": "displayName",
            "baseName": "displayName",
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
        }        {
            "name": "isAverageDailyPayRate",
            "baseName": "isAverageDailyPayRate",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return EarningsLine.attributeTypeMap;
    }
}

