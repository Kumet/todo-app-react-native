export type User = {
    uid: string
    email: string
}

export type Tag = {
    id: string
    name: string
    createdAt: string
}

export type RootStackParamList = {
    Auth: undefined
    TagList: undefined
    CreateTag: undefined
}