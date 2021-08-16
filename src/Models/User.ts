import { Entity } from "./Entity";

export interface User extends Entity {
    __type: string;
    guid: null;
    first_name: string;
    middle_name: null;
    last_name: string;
    role: string;
    status: string;
    profile_pic_url: string;
    email: string;
    bio: string;
    legal_name: null;
    nick_name: null;
    job_type: null;
    phone_number: string;
    alternate_phone_number: null;
    gender: null;
    birth_year: null;
    birth_month: null;
    birth_date: null;
    death_year: null;
    death_month: null;
    death_date: null;
    urls: any[];
    last_invited_to_platform_at: null;
    education: null;
    hometown: null;
    state_code: null;
    home_state_code: null;
    meta: Meta;
    is_2fa_enabled: boolean;
    default_2fa_type: string;
    created_at: Date;
    updated_at: Date;
    recentOccupation: RecentOccupation;
    recentEducation: RecentEducation;
    person: Person;
    isMyContact: boolean;
}

export interface Meta {
    "2fa": The2Fa;
    onboarding_feed: boolean;
    onboarding_events: boolean;
    onboarding_groups: boolean;
}

export interface The2Fa {
    totp_code: boolean;
    email_code: boolean;
    phone_code: boolean;
    backup_code: boolean;
    is_number_verified: boolean;
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
    legOffice: null;
}

export interface PersonCommittees {
    caucuses: Caucus[];
    committees: CommitteesCommittees;
}

export interface Caucus {
    id: number;
    parent_id: null;
    chamber_id: number;
    role: string;
    state_code: string;
    category: string;
    display_name: string;
    urls: Urls;
    created_at: Date;
    updated_at: Date;
    __type: string;
    memberRole: string;
}

export interface Urls {
}

export interface CommitteesCommittees {
    parentCommittees: ParentCommittees;
    subCommittees: any[];
}

export interface ParentCommittees {
    money_committees: Urls;
    national_policy_committees: Urls;
    economic_policy_committees: Urls;
    special_purpose_committees: Urls;
    selects_and_commissions: Urls;
    operation_committees: Urls;
    uncategorised: Urls;
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

export interface RecentEducation {
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
    source: null;
    created_at: Date;
    updated_at: Date;
}

export interface RecentOccupation {
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
