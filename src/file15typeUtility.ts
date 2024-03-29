// type utility
/*
    Partial <Type>
    Required <Type>
    Readonly <Type>
    Record <Keys, Type>
    Pick <Type, Keys>
    Omit <Type, Keys>
    Exclude <Type, ExcludedUnion>
    Extract <Type, Union>
    NonNullable <Type>
    Parameters <Type>
    ConstructorParameters <Type>
    ReturnType <Type>
    InstanceType <Type>
*/

type User = {
    name: string;
    email: string;
};
// without Partial type
type User2 = {
    name?: string;
    email?: string;
};
// with Partial type
type User3 = Partial<User>;

// required => opposite of partial type
type User4 = Required<User2>;

// readonly
type User5 = Readonly<User>;

// record (Keys, Type)
type User6 = Record<"name" | "email" | "gender", string>;
