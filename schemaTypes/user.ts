

export default {
    name: "user",
    title:'User',
    type: 'document',
    fields: [
        {
            name:'userId',
            title: 'User Id',
            type: 'string',
            readonly: true
        },
          {
            name:'name',
            title: 'Name',
            type: 'string',
            readonly: true
        },
          {
            name:'email',
            title: 'Email',
            type: 'string',
            readonly: true
        },
          {
            name:'image',
            title: 'Image Url',
            type: 'url',
            readonly: true
        },
        {
            name:'createdAt',
            title:"Created At",
            type:'datetime',
            readonly:true
        }
    ],
    preview: {
        select: {
            title: 'name',
            image: 'image',

        },
        prepare({ title, image }: { title: string, image: string }) {
            return {
                title,
                media: image
            }

        }
    }
}