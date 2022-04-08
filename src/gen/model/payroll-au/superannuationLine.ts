import { SuperannuationCalculationType } from '././superannuationCalculationType';
import { SuperannuationContributionType } from '././superannuationContributionType';

export class SuperannuationLine {
    /**
    * Xero identifier for payroll super fund membership ID.
    */
    'superMembershipID'?: string;
    'contributionType'?: SuperannuationContributionType;
    'calculationType'?: SuperannuationCalculationType;
    /**
    * Superannuation minimum monthly earnings.
    */
    'minimumMonthlyEarnings'?: number;
    /**
    * Superannuation expense account code.
    */
    'expenseAccountCode'?: string;
    /**
    * Superannuation liability account code
    */
    'liabilityAccountCode'?: string;
    /**
    * Superannuation payment date for the current period (YYYY-MM-DD)
    */
    'paymentDateForThisPeriod'?: string;
    /**
    * Superannuation percentage
    */
    'percentage'?: number;
    /**
    * Superannuation amount
    */
    'amount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "superMembershipID",
            "baseName": "SuperMembershipID",
            "type": "string"
        }        {
            "name": "contributionType",
            "baseName": "ContributionType",
            "type": "SuperannuationContributionType"
        }        {
            "name": "calculationType",
            "baseName": "CalculationType",
            "type": "SuperannuationCalculationType"
        }        {
            "name": "minimumMonthlyEarnings",
            "baseName": "MinimumMonthlyEarnings",
            "type": "number"
        }        {
            "name": "expenseAccountCode",
            "baseName": "ExpenseAccountCode",
            "type": "string"
        }        {
            "name": "liabilityAccountCode",
            "baseName": "LiabilityAccountCode",
            "type": "string"
        }        {
            "name": "paymentDateForThisPeriod",
            "baseName": "PaymentDateForThisPeriod",
            "type": "string"
        }        {
            "name": "percentage",
            "baseName": "Percentage",
            "type": "number"
        }        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SuperannuationLine.attributeTypeMap;
    }
}

