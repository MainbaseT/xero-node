import { BenefitLine } from '././benefitLine';
import { CourtOrderLine } from '././courtOrderLine';
import { DeductionLine } from '././deductionLine';
import { EarningsLine } from '././earningsLine';
import { LeaveAccrualLine } from '././leaveAccrualLine';
import { LeaveEarningsLine } from '././leaveEarningsLine';
import { PaymentLine } from '././paymentLine';
import { ReimbursementLine } from '././reimbursementLine';
import { TaxLine } from '././taxLine';
import { TimesheetEarningsLine } from '././timesheetEarningsLine';

export class Payslip {
    /**
    * The Xero identifier for a Payslip
    */
    'paySlipID'?: string;
    /**
    * The Xero identifier for payroll employee
    */
    'employeeID'?: string;
    /**
    * The Xero identifier for the associated payrun
    */
    'payRunID'?: string;
    /**
    * The date payslip was last updated
    */
    'lastEdited'?: string;
    /**
    * Employee first name
    */
    'firstName'?: string;
    /**
    * Employee last name
    */
    'lastName'?: string;
    /**
    * Total earnings before any deductions. Same as gross earnings for UK.
    */
    'totalEarnings'?: number;
    /**
    * Total earnings before any deductions. Same as total earnings for UK.
    */
    'grossEarnings'?: number;
    /**
    * The employee net pay
    */
    'totalPay'?: number;
    /**
    * The employer\'s tax obligation
    */
    'totalEmployerTaxes'?: number;
    /**
    * The part of an employee\'s earnings that is deducted for tax purposes
    */
    'totalEmployeeTaxes'?: number;
    /**
    * Total amount subtracted from an employee\'s earnings to reach total pay
    */
    'totalDeductions'?: number;
    /**
    * Total reimbursements are nontaxable payments to an employee used to repay out-of-pocket expenses when the person incurs those expenses through employment
    */
    'totalReimbursements'?: number;
    /**
    * Total amounts required by law to subtract from the employee\'s earnings
    */
    'totalCourtOrders'?: number;
    /**
    * Benefits (also called fringe benefits, perquisites or perks) are various non-earnings compensations provided to employees in addition to their normal earnings or salaries
    */
    'totalBenefits'?: number;
    /**
    * BACS Service User Number
    */
    'bacsHash'?: string;
    /**
    * The payment method code
    */
    'paymentMethod'?: Payslip.PaymentMethodEnum;
    'earningsLines'?: Array<EarningsLine>;
    'leaveEarningsLines'?: Array<LeaveEarningsLine>;
    'timesheetEarningsLines'?: Array<TimesheetEarningsLine>;
    'deductionLines'?: Array<DeductionLine>;
    'reimbursementLines'?: Array<ReimbursementLine>;
    'leaveAccrualLines'?: Array<LeaveAccrualLine>;
    'benefitLines'?: Array<BenefitLine>;
    'paymentLines'?: Array<PaymentLine>;
    'employeeTaxLines'?: Array<TaxLine>;
    'employerTaxLines'?: Array<TaxLine>;
    'courtOrderLines'?: Array<CourtOrderLine>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paySlipID",
            "baseName": "paySlipID",
            "type": "string"
        }        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        }        {
            "name": "payRunID",
            "baseName": "payRunID",
            "type": "string"
        }        {
            "name": "lastEdited",
            "baseName": "lastEdited",
            "type": "string"
        }        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        }        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        }        {
            "name": "totalEarnings",
            "baseName": "totalEarnings",
            "type": "number"
        }        {
            "name": "grossEarnings",
            "baseName": "grossEarnings",
            "type": "number"
        }        {
            "name": "totalPay",
            "baseName": "totalPay",
            "type": "number"
        }        {
            "name": "totalEmployerTaxes",
            "baseName": "totalEmployerTaxes",
            "type": "number"
        }        {
            "name": "totalEmployeeTaxes",
            "baseName": "totalEmployeeTaxes",
            "type": "number"
        }        {
            "name": "totalDeductions",
            "baseName": "totalDeductions",
            "type": "number"
        }        {
            "name": "totalReimbursements",
            "baseName": "totalReimbursements",
            "type": "number"
        }        {
            "name": "totalCourtOrders",
            "baseName": "totalCourtOrders",
            "type": "number"
        }        {
            "name": "totalBenefits",
            "baseName": "totalBenefits",
            "type": "number"
        }        {
            "name": "bacsHash",
            "baseName": "bacsHash",
            "type": "string"
        }        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "Payslip.PaymentMethodEnum"
        }        {
            "name": "earningsLines",
            "baseName": "earningsLines",
            "type": "Array<EarningsLine>"
        }        {
            "name": "leaveEarningsLines",
            "baseName": "leaveEarningsLines",
            "type": "Array<LeaveEarningsLine>"
        }        {
            "name": "timesheetEarningsLines",
            "baseName": "timesheetEarningsLines",
            "type": "Array<TimesheetEarningsLine>"
        }        {
            "name": "deductionLines",
            "baseName": "deductionLines",
            "type": "Array<DeductionLine>"
        }        {
            "name": "reimbursementLines",
            "baseName": "reimbursementLines",
            "type": "Array<ReimbursementLine>"
        }        {
            "name": "leaveAccrualLines",
            "baseName": "leaveAccrualLines",
            "type": "Array<LeaveAccrualLine>"
        }        {
            "name": "benefitLines",
            "baseName": "benefitLines",
            "type": "Array<BenefitLine>"
        }        {
            "name": "paymentLines",
            "baseName": "paymentLines",
            "type": "Array<PaymentLine>"
        }        {
            "name": "employeeTaxLines",
            "baseName": "employeeTaxLines",
            "type": "Array<TaxLine>"
        }        {
            "name": "employerTaxLines",
            "baseName": "employerTaxLines",
            "type": "Array<TaxLine>"
        }        {
            "name": "courtOrderLines",
            "baseName": "courtOrderLines",
            "type": "Array<CourtOrderLine>"
        }    ];

    static getAttributeTypeMap() {
        return Payslip.attributeTypeMap;
    }
}

export namespace Payslip {
    export enum PaymentMethodEnum {
        Cheque = <any> 'Cheque',
        Electronically = <any> 'Electronically',
        Manual = <any> 'Manual'
    }
}
