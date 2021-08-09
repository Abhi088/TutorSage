import { Entity } from "./Entity";

export interface User extends Entity {
    __type: string;
    guid: null;
    first_name: string;
    middle_name: string;
    last_name: string;
    role: "staff" | "admin";
    status: string;
    profile_pic_url: string;
    email: string;
    legal_name: string;
    nick_name: string;
    job_type: string;
    phone_number: string;
    alternate_phone_number: string;
    gender: string;
    birth_year: string;
    birth_month: string;
    birth_date: string;
    death_year: string;
    death_month: string;
    death_date: string;
    urls: any[];
    last_invited_to_platform_at: null;
    education: string;
    hometown: string;
    state_code: string;
    home_state_code: null;
    meta: Meta;
    is_2fa_enabled: boolean;
    default_2fa_type: string;
    created_at: Date;
    updated_at: Date;
    is_zoom_connected: boolean;
    person: Person;
    educations: Education[];
    occupations: Occupation[];
    blockedUsers: any[];
    memberToAdvocatePages: any[];
    ownerToAdvocatePages: any[];
}

export interface Education {
    __type: string;
    id: number;
    user_id: number;
    course_name_short: string;
    course_name: string;
    school_name: string;
    majors: null;
    minors: null;
    start_year: string;
    end_year: string;
    source: string;
    created_at: Date;
    updated_at: Date;
}

export interface Meta {
    caucuses_status: boolean;
    onboarding_feed: boolean;
    onboarding_events: boolean;
    onboarding_groups: boolean;
}

export interface Occupation {
    id: number;
    user_id: number;
    title: string;
    company: string;
    start_year: string;
    end_year: string;
    source: null;
    source_id: null;
    source_updated_at: null;
    created_at: Date;
    updated_at: Date;
    committee: null;
    legMember: null;
    legOffice: null;
}

export interface Person {
    id: number;
    party: string;
    job_type: null;
    chamber: null;
    created_at: Date;
    updated_at: Date;
    committees: PersonCommittees;
    issues: Issue[];
    legMember: null;
    legOffice: LegOffice;
}

export interface PersonCommittees {
    caucuses: any[];
    committees: CommitteesCommittees;
}

export interface CommitteesCommittees {
    parentCommittees: ParentCommittees;
    subCommittees: any[];
}

export interface ParentCommittees {
    money_committees: EconomicPolicyCommittees;
    national_policy_committees: EconomicPolicyCommittees;
    economic_policy_committees: EconomicPolicyCommittees;
    special_purpose_committees: EconomicPolicyCommittees;
    selects_and_commissions: EconomicPolicyCommittees;
    operation_committees: EconomicPolicyCommittees;
    uncategorised: EconomicPolicyCommittees;
}

export interface EconomicPolicyCommittees {
}

export interface Issue {
    id: number;
    code: string;
    title_one_word: string;
    title_short: string;
    title: string;
    summary: null | string;
    created_at: Date;
    updated_at: Date;
}

export interface LegOffice {
    id: number;
    person_id: number;
    chamber_id: number;
    state_code: string;
    role: string;
    office_name: string;
    created_at: Date;
    updated_at: Date;
}
