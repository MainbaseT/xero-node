
export class Deduction {
    /**
    * The Xero identifier for Deduction
    */
    'deductionId'?: string;
    /**
    * Name of the deduction
    */
    'deductionName': string;
    /**
    * Deduction Category type
    */
    'deductionCategory'?: Deduction.DeductionCategoryEnum;
    /**
    * Xero identifier for Liability Account
    */
    'liabilityAccountId': string;
    /**
    * Identifier of a record is active or not.
    */
    'currentRecord'?: boolean;
    /**
    * Standard amount of the deduction
    */
    'standardAmount'?: number;
    /**
    * Identifier of reduces super liability
    */
    'reducesSuperLiability'?: boolean;
    /**
    * Identifier of reduces tax liability
    */
    'reducesTaxLiability'?: boolean;
    /**
    * determine the calculation type whether fixed amount or percentage of gross
    */
    'calculationType'?: Deduction.CalculationTypeEnum;
    /**
    * Percentage of gross
    */
    'percentage'?: number;
    /**
    * Identifier of subject To NIC
    */
    'subjectToNIC'?: boolean;
    /**
    * Identifier of subject To Tax
    */
    'subjectToTax'?: boolean;
    /**
    * Identifier of reduced by basic rate applicable or not
    */
    'isReducedByBasicRate'?: boolean;
    /**
    * Identifier for apply to pension calculations
    */
    'applyToPensionCalculations'?: boolean;
    /**
    * Identifier of calculating on qualifying earnings
    */
    'isCalculatingOnQualifyingEarnings'?: boolean;
    /**
    * Identifier of applicable for pension or not
    */
    'isPension'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deductionId",
            "baseName": "deductionId",
            "type": "string"
        }        {
            "name": "deductionName",
            "baseName": "deductionName",
            "type": "string"
        }        {
            "name": "deductionCategory",
            "baseName": "deductionCategory",
            "type": "Deduction.DeductionCategoryEnum"
        }        {
            "name": "liabilityAccountId",
            "baseName": "liabilityAccountId",
            "type": "string"
        }        {
            "name": "currentRecord",
            "baseName": "currentRecord",
            "type": "boolean"
        }        {
            "name": "standardAmount",
            "baseName": "standardAmount",
            "type": "number"
        }        {
            "name": "reducesSuperLiability",
            "baseName": "reducesSuperLiability",
            "type": "boolean"
        }        {
            "name": "reducesTaxLiability",
            "baseName": "reducesTaxLiability",
            "type": "boolean"
        }        {
            "name": "calculationType",
            "baseName": "calculationType",
            "type": "Deduction.CalculationTypeEnum"
        }        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number"
        }        {
            "name": "subjectToNIC",
            "baseName": "subjectToNIC",
            "type": "boolean"
        }        {
            "name": "subjectToTax",
            "baseName": "subjectToTax",
            "type": "boolean"
        }        {
            "name": "isReducedByBasicRate",
            "baseName": "isReducedByBasicRate",
            "type": "boolean"
        }        {
            "name": "applyToPensionCalculations",
            "baseName": "applyToPensionCalculations",
            "type": "boolean"
        }        {
            "name": "isCalculatingOnQualifyingEarnings",
            "baseName": "isCalculatingOnQualifyingEarnings",
            "type": "boolean"
        }        {
            "name": "isPension",
            "baseName": "isPension",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Deduction.attributeTypeMap;
    }
}

export namespace Deduction {
    export enum DeductionCategoryEnum {
        CapitalContributions = <any> 'CapitalContributions',
        ChildCareVoucher = <any> 'ChildCareVoucher',
        MakingGood = <any> 'MakingGood',
        PostgraduateLoanDeductions = <any> 'PostgraduateLoanDeductions',
        PrivateUsePayments = <any> 'PrivateUsePayments',
        SalarySacrifice = <any> 'SalarySacrifice',
        StakeholderPension = <any> 'StakeholderPension',
        StakeholderPensionPostTax = <any> 'StakeholderPensionPostTax',
        StudentLoanDeductions = <any> 'StudentLoanDeductions',
        UkOther = <any> 'UkOther'
    }
    export enum CalculationTypeEnum {
        FixedAmount = <any> 'FixedAmount',
        PercentageOfGross = <any> 'PercentageOfGross'
    }
}
