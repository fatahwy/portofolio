import { type SchemaTypeDefinition } from 'sanity'

const globalType: SchemaTypeDefinition = {
  name: 'global',
  title: 'Global',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'navbar',
      title: 'Navbar',
      type: 'string'
    }
  ]
}

const projectType: SchemaTypeDefinition = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'previews',
      title: 'Previews',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
            { title: 'Quote', value: 'blockquote' }
          ],
        },
        {
          type: 'image'
        },
      ],
    },
    {
      name: 'urlwebsite',
      title: 'Url Website',
      type: 'string',
    },
    {
      name: 'urlrepository',
      title: 'Url Repository',
      type: 'string',
    },
  ],
};

const aboutType: SchemaTypeDefinition = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'urlgithub',
      title: 'Url Github',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'urllinkedin',
      title: 'Url Linkedin',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ]
}

const techStackType: SchemaTypeDefinition = {
  name: 'techstack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
    },
  ]
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [globalType, projectType, aboutType, techStackType],
}
