import { Attachment } from '././attachment';
import { Contact } from '././contact';
import { CurrencyCode } from '././currencyCode';
import { LineAmountTypes } from '././lineAmountTypes';
import { LineItem } from '././lineItem';
import { ValidationError } from '././validationError';

export class PurchaseOrder {
    'contact'?: Contact;
    /**
    * See LineItems
    */
    'lineItems'?: Array<LineItem>;
    /**
    * Date purchase order was issued – YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation
    */
    'date'?: string;
    /**
    * Date the goods are to be delivered – YYYY-MM-DD
    */
    'deliveryDate'?: string;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * Unique alpha numeric code identifying purchase order (when missing will auto-generate from your Organisation Invoice Settings)
    */
    'purchaseOrderNumber'?: string;
    /**
    * Additional reference number
    */
    'reference'?: string;
    /**
    * See BrandingThemes
    */
    'brandingThemeID'?: string;
    'currencyCode'?: CurrencyCode;
    /**
    * See Purchase Order Status Codes
    */
    'status'?: PurchaseOrder.StatusEnum;
    /**
    * Boolean to set whether the purchase order should be marked as “sent”. This can be set only on purchase orders that have been approved or billed
    */
    'sentToContact'?: boolean;
    /**
    * The address the goods are to be delivered to
    */
    'deliveryAddress'?: string;
    /**
    * The person that the delivery is going to
    */
    'attentionTo'?: string;
    /**
    * The phone number for the person accepting the delivery
    */
    'telephone'?: string;
    /**
    * A free text feild for instructions (500 characters max)
    */
    'deliveryInstructions'?: string;
    /**
    * The date the goods are expected to arrive.
    */
    'expectedArrivalDate'?: string;
    /**
    * Xero generated unique identifier for purchase order
    */
    'purchaseOrderID'?: string;
    /**
    * The currency rate for a multicurrency purchase order. If no rate is specified, the XE.com day rate is used.
    */
    'currencyRate'?: number;
    /**
    * Total of purchase order excluding taxes
    */
    'subTotal'?: number;
    /**
    * Total tax on purchase order
    */
    'totalTax'?: number;
    /**
    * Total of Purchase Order tax inclusive (i.e. SubTotal + TotalTax)
    */
    'total'?: number;
    /**
    * Total of discounts applied on the purchase order line items
    */
    'totalDiscount'?: number;
    /**
    * boolean to indicate if a purchase order has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * Last modified date UTC format
    */
    'updatedDateUTC'?: Date;
    /**
    * A string to indicate if a invoice status
    */
    'statusAttributeString'?: string;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
    /**
    * Displays array of warning messages from the API
    */
    'warnings'?: Array<ValidationError>;
    /**
    * Displays array of attachments from the API
    */
    'attachments'?: Array<Attachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contact",
            "baseName": "Contact",
            "type": "Contact"
        }        {
            "name": "lineItems",
            "baseName": "LineItems",
            "type": "Array<LineItem>"
        }        {
            "name": "date",
            "baseName": "Date",
            "type": "string"
        }        {
            "name": "deliveryDate",
            "baseName": "DeliveryDate",
            "type": "string"
        }        {
            "name": "lineAmountTypes",
            "baseName": "LineAmountTypes",
            "type": "LineAmountTypes"
        }        {
            "name": "purchaseOrderNumber",
            "baseName": "PurchaseOrderNumber",
            "type": "string"
        }        {
            "name": "reference",
            "baseName": "Reference",
            "type": "string"
        }        {
            "name": "brandingThemeID",
            "baseName": "BrandingThemeID",
            "type": "string"
        }        {
            "name": "currencyCode",
            "baseName": "CurrencyCode",
            "type": "CurrencyCode"
        }        {
            "name": "status",
            "baseName": "Status",
            "type": "PurchaseOrder.StatusEnum"
        }        {
            "name": "sentToContact",
            "baseName": "SentToContact",
            "type": "boolean"
        }        {
            "name": "deliveryAddress",
            "baseName": "DeliveryAddress",
            "type": "string"
        }        {
            "name": "attentionTo",
            "baseName": "AttentionTo",
            "type": "string"
        }        {
            "name": "telephone",
            "baseName": "Telephone",
            "type": "string"
        }        {
            "name": "deliveryInstructions",
            "baseName": "DeliveryInstructions",
            "type": "string"
        }        {
            "name": "expectedArrivalDate",
            "baseName": "ExpectedArrivalDate",
            "type": "string"
        }        {
            "name": "purchaseOrderID",
            "baseName": "PurchaseOrderID",
            "type": "string"
        }        {
            "name": "currencyRate",
            "baseName": "CurrencyRate",
            "type": "number"
        }        {
            "name": "subTotal",
            "baseName": "SubTotal",
            "type": "number"
        }        {
            "name": "totalTax",
            "baseName": "TotalTax",
            "type": "number"
        }        {
            "name": "total",
            "baseName": "Total",
            "type": "number"
        }        {
            "name": "totalDiscount",
            "baseName": "TotalDiscount",
            "type": "number"
        }        {
            "name": "hasAttachments",
            "baseName": "HasAttachments",
            "type": "boolean"
        }        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        }        {
            "name": "statusAttributeString",
            "baseName": "StatusAttributeString",
            "type": "string"
        }        {
            "name": "validationErrors",
            "baseName": "ValidationErrors",
            "type": "Array<ValidationError>"
        }        {
            "name": "warnings",
            "baseName": "Warnings",
            "type": "Array<ValidationError>"
        }        {
            "name": "attachments",
            "baseName": "Attachments",
            "type": "Array<Attachment>"
        }    ];

    static getAttributeTypeMap() {
        return PurchaseOrder.attributeTypeMap;
    }
}

export namespace PurchaseOrder {
    export enum StatusEnum {
        Draft = <any> 'DRAFT',
        Submitted = <any> 'SUBMITTED',
        Authorised = <any> 'AUTHORISED',
        Billed = <any> 'BILLED',
        Deleted = <any> 'DELETED'
    }
}
