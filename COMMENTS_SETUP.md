# Comments System Setup Summary

## 🎯 What Was Implemented

A complete comment system that integrates with Supabase authentication and allows users to leave comments on characters.

## 📁 Files Created/Modified

### Database Schema

- **`src/pkg/libraries/db/schema/comments.ts`** - Comments table schema with Supabase auth integration
- **`src/pkg/libraries/db/schema/index.ts`** - Schema exports
- **`src/pkg/libraries/db/drizzle.server.ts`** - Updated to include schema

### Server Actions

- **`src/app/(client)/entities/api/comments/comments.actions.ts`** - Server actions for CRUD operations
- **`src/app/(client)/entities/api/comments/index.ts`** - Exports

### UI Components

- **`src/app/(client)/widgets/character-comments/character-comments.component.tsx`** - Comment widget
- **`src/app/(client)/widgets/character-comments/index.ts`** - Exports
- **`src/app/(client)/widgets/character-comments/README.md`** - Documentation

## 🔑 Key Features

### 1. **Supabase Auth Integration**

The system references Supabase's existing `auth.users` table without creating duplicates:

```typescript
const authSchema = pgSchema('auth')
export const authUsers = authSchema.table('users', {
  id: uuid('id').primaryKey(),
})
```

### 2. **Comments Schema**

```typescript
export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  characterId: integer('character_id')
    .notNull()
    .references(() => characters.id, { onDelete: 'cascade' }),
  userId: uuid('user_id')
    .notNull()
    .references(() => authUsers.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})
```

### 3. **Authorization**

- ✅ Only authenticated users can create comments
- ✅ Users can only delete their own comments
- ✅ Comments are tied to specific characters
- ✅ Foreign key constraints ensure data integrity

## 🚀 How to Use

### Step 1: Run Database Migrations

```bash
# Generate migration files
npm run db:generate

# Apply migrations to database
npm run db:migrate

# (Optional) View your database in Drizzle Studio
npm run db:studio
```

### Step 2: Add Comments Widget to Character Page

In your character detail page (e.g., `src/app/(client)/[locale]/character/[slug]/page.tsx`):

```tsx
import { CharacterComments } from '@/app/(client)/widgets/character-comments'

export default function CharacterPage({ params }: { params: { slug: string } }) {
  // Extract character ID from slug or fetch character data
  const characterId = parseInt(params.slug)

  return (
    <div>
      {/* Your existing character details */}
      <CharacterDetail characterId={characterId} />

      {/* Add comments widget */}
      <div className='mt-8'>
        <CharacterComments characterId={characterId} />
      </div>
    </div>
  )
}
```

### Step 3: Ensure User Authentication

The comments widget automatically:

- Shows comment form to logged-in users
- Shows "Please log in" message to guests
- Handles authentication state changes in real-time

## 🔒 Security Features

1. **Server-Side Validation**
   - Comment content validation (max 1000 chars)
   - User authentication checks
   - Ownership verification for deletion

2. **Database Constraints**
   - Foreign keys ensure referential integrity
   - Cascade delete when character or user is removed
   - NOT NULL constraints prevent invalid data

3. **Authorization**

   ```typescript
   // In createComment
   const {
     data: { user },
   } = await supabase.auth.getUser()
   if (!user) {
     return { success: false, error: 'You must be logged in' }
   }

   // In deleteComment
   if (comment.userId !== user.id) {
     return { success: false, error: 'You can only delete your own comments' }
   }
   ```

## 📊 Database Relationships

```
┌─────────────────┐
│  auth.users     │ (Supabase managed)
│  - id (uuid)    │◄──┐
└─────────────────┘   │
                      │
┌─────────────────┐   │   ┌─────────────────┐
│  characters     │   │   │  comments       │
│  - id           │◄──┼───│  - id           │
│  - name         │   │   │  - content      │
│  - status       │   └───│  - userId       │
│  - ...          │       │  - characterId  │
└─────────────────┘       │  - createdAt    │
                          │  - updatedAt    │
                          └─────────────────┘
```

## 🛠️ Available Server Actions

### `createComment({ characterId, content })`

Creates a new comment.

### `getCharacterComments(characterId)`

Fetches all comments for a character with user data.

### `deleteComment(commentId)`

Deletes a comment (only by the author).

## 📝 Next Steps

1. ✅ Run migrations
2. ✅ Add widget to character pages
3. ✅ Test with authenticated users
4. 🔄 (Optional) Add user profile info (name, avatar) to comments display
5. 🔄 (Optional) Add edit functionality
6. 🔄 (Optional) Add like/reaction system
7. 🔄 (Optional) Add comment moderation

## 🐛 Troubleshooting

### "Foreign key constraint violation"

- Ensure the character exists before creating a comment
- Verify the user is authenticated with Supabase

### "User must be logged in" error

- Check Supabase auth is properly configured
- Verify environment variables are set
- Ensure cookies are enabled in the browser

### Comments not showing

- Check if migrations were applied successfully
- Verify the characterId is correct
- Check browser console for errors
