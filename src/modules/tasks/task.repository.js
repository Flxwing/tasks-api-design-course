import { unwrap } from "../../lib/supabase.js"

const TABLE_NAME = 'tasks';
const TABLE_COLUMNS = "id, title, description, done, created_at";

export function createTaskRepository(supabase) {
    return {
        async findAll() {
            return unwrap(
                await supabase
                    .from(TABLE_NAME)
                    .select(TABLE_COLUMNS)
                    .order('created_at', { ascending: false })
            );
        },

        async create(data) {
            console.log(data)
            return unwrap(
                await supabase
                    .from(TABLE_NAME)
                    .insert(data)
                    .select(TABLE_COLUMNS)
                    .single()
            );
        },
        async findById(id) {
            return unwrap(
                await supabase
                    .from(TABLE_NAME)
                    .select(TABLE_COLUMNS)
                    .eq('id', id)
                    .maybeSingle()
            );
        },
        async update(id, changes) {
            return unwrap(
                await supabase
                    .from(TABLE_NAME)
                    .update(changes)
                    .eq('id', id)
                    .select(TABLE_COLUMNS)
                    .maybeSingle()
            );
        },
        async remove(id) {
            const deleted = unwrap(
                await supabase
                    .from(TABLE_NAME)
                    .delete()
                    .eq('id', id)
                    .select('id')
                    .maybeSingle()
            );
            return deleted !== null;
        },
    }
}