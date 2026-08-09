export type AppendField<Key extends string, T> = T extends undefined ? object : Record<Key, T>;
