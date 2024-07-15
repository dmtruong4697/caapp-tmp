export type Group = {
    id: number,
    creator_id: number,
    name: string,
    status: string,
    created_at: Date,
    last_message_id: number,
    group_image_url: string,
    type: string,
    invite_code: string,
    is_allow_invite_code: boolean,
}

export type Relationship = {
    id: number,
    sender_id: number,
    receiver_id: number,
    created_at: Date,
    status: string,
}

export type UserInfo = {
    id: number,
    user_name: number,
    email: string,
    phone_number: string,
    avatar_image: string,
    hashtag_name: string,
    created_at: Date,
    account_status: string,
    last_active: Date,
    gender: string,
    date_of_birth: Date,
    relationship: Relationship,
}

export type Member = {
    user_info: UserInfo,
    join_at: Date,
    status: string,
    ingroup_name: string,
}

export type LastMessage = {
    id: number,
    created_at: Date,
    content: string,
    sender: UserInfo,
}

export type GroupInfo = {
    group: Group,
    members: Member[],
    last_message: LastMessage,
}