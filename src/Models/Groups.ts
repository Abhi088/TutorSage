export interface Group {
    id: number;
    name: string;
    is_private: boolean;
    description: string;
    introductory_message?: string;
    group_image_url: null | string;
    join_code: string;
    created_at: Date;
    updated_at: Date;
    chatCount: number;
    state: State | null;
    creator: Creator;
    issues: Issue[];
    invitedMembers: Creator[];
    participants: Creator[];
    advocatePage: AdvocatePage | null;
}

export interface AdvocatePage {
    __type: Role;
    id: number;
    name: string;
    type: string;
    about: string;
    top_lines: string;
    leadership: string;
    image_url: string;
    quick_takes: QuickTake[];
    videos: Video[];
    positions: Position[];
    our_team: OurTeam[];
    automated_reply: AutomatedReply | null;
    status: string;
    created_at: Date;
    updated_at: Date;
    owner: Creator;
    issues: Issue[];
    followersCount: number;
    members: Creator[];
}

export enum Role {
    Admin = "admin",
    Advocate = "advocate",
    Staff = "staff",
}

export interface AutomatedReply {
    unit: string;
    delay: number;
    message: string;
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

export interface Creator {
    __type: Type;
    id: number;
    guid: null;
    first_name: string;
    middle_name: null | string;
    last_name: string;
    role: Role;
    status: Status;
    profile_pic_url: null | string;
    email?: string;
    advocateMemberRole?: AdvocateMemberRole;
    groupMemberStatus?: GroupMemberStatus;
}

export enum Type {
    AdvocateRole = "advocateRole",
    Email = "email",
    GroupMember = "groupMember",
    Name = "name",
}

export enum AdvocateMemberRole {
    Admin = "admin",
    ChatSupport = "chat_support",
    ContentModerator = "content_moderator",
}

export enum GroupMemberStatus {
    InvitationAccepted = "invitation_accepted",
    Invited = "invited",
    RequestToJoinAccepted = "request_to_join_accepted",
}

export enum Status {
    Claimed = "claimed",
    New = "new",
}

export interface OurTeam {
    first_name: string;
    last_name: string;
    email: string;
    profile_pic_url: string;
    title: string;
    about: string;
    uuid: string;
}

export interface Position {
    uuid: string;
    position: string;
    description: string;
}

export interface QuickTake {
    title: string;
    description: string;
    issue_ids: number[];
    link: string;
    date: Date;
    uuid: string;
}

export interface Video {
    issue_ids: number[];
    link: string;
    uuid?: string;
    thumbnail?: string;
    video_format?: string;
}

export interface State {
    id: number;
    title: string;
    state_code: string;
    created_at: Date;
    updated_at: Date;
}