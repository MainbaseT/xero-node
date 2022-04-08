
export class ContactPerson {
    /**
    * First name of person
    */
    'firstName'?: string;
    /**
    * Last name of person
    */
    'lastName'?: string;
    /**
    * Email address of person
    */
    'emailAddress'?: string;
    /**
    * boolean to indicate whether contact should be included on emails with invoices etc.
    */
    'includeInEmails'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "FirstName",
            "type": "string"
        }        {
            "name": "lastName",
            "baseName": "LastName",
            "type": "string"
        }        {
            "name": "emailAddress",
            "baseName": "EmailAddress",
            "type": "string"
        }        {
            "name": "includeInEmails",
            "baseName": "IncludeInEmails",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ContactPerson.attributeTypeMap;
    }
}

