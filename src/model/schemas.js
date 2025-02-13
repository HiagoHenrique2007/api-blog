export const addSchema = {
    schema: {
        type: 'object',
        required: [banner_path, title, date, description, contentArticle],
        properties: {
            banner_path: { type: 'string', minLength: 28 },
            title: { type: 'string', minLength: 140, maxLength: 200 },
            date: { type: 'string', minLength: 10, maxLength: 10},
            description: { type: 'string', minLength: 240, maxLength: 500},
            contentArticle: { type: 'string', minLength: 500}
        }
    }
}