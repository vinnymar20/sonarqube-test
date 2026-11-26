/*
Sends an email.

await sendEmail({
    to: string | string[];
    subject: string;
    html?: string;
    from?: string;
    templateId?: string;
    primitives?: Record<string, string>;
    attachments?: unknown[];
    cc?: string | string[];
    bcc?: string | string[];
});
You can also call the function passing individual parameters,
this is only to maintain compatibility with existing code and should be considered deprecated.


As a minimum to, subject and html must be provided to send and email. If from is not specified it will use the default from
address specified in system settings.

If a template id is specified the template will be used instead of html. Templates can be created in the cockpit from
Development -> Resources -> Email Template.

When using a template values can be piped to the template using the primitives parameter, e.g.

Template:
Hi {=name}

With the above template {=name} can be replaced by providing the following object, {name: "John"}, as the primitives parameter, e.g.

await sendEmail({
    to: "to@email",
    subject: "Subject",
    from: "from@email",
    templateId:" template-id",
    primitives: {name: "John"}
});

Attachments can be added be added like this:
attachments: [
    {   // utf-8 string as an attachment
        filename: 'text1.txt',
        content: 'hello world!'
    },
    {   // binary buffer as an attachment
        filename: 'text2.txt',
        content: new Buffer('hello world!','utf-8')
    },
    {   // file on disk as an attachment
        filename: 'text3.txt',
        path: '/path/to/file.txt' // stream this file
    },
    {   // filename and content type is derived from path
        path: '/path/to/file.txt'
    },
    {   // stream as an attachment
        filename: 'text4.txt',
        content: fs.createReadStream('file.txt')
    },
    {   // define custom content type for the attachment
        filename: 'text.bin',
        content: 'hello world!',
        contentType: 'text/plain'
    },
    {   // use URL as an attachment
        filename: 'license.txt',
        path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
    },
    {   // encoded string as an attachment
        filename: 'text1.txt',
        content: 'aGVsbG8gd29ybGQh',
        encoding: 'base64'
    },
    {   // data uri as an attachment
        path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
    },
    {
        // use pregenerated MIME node
        raw: 'Content-Type: text/plain\r\n' +
             'Content-Disposition: attachment;\r\n' +
             '\r\n' +
             'Hello world!'
    }
]
*/
/*
    This code snippet is used to send out emails from a script.
    Make sure you have configured a connection between your SMTP server and Neptune DXP - Open Edition.
*/
const html = "<br>example html</br>";
await sendEmail({
  to: "to@email",
  subject: "Subject",
  html,
});

// const attachments = [
//   {
//     filename: "filename.txt",
//     path: "/path/to/file.txt",
//   },
// ];

// templateId := id of the email templete from the tool Email Templete within the Cockpit
await sendEmail({
  to: "to@email",
  subject: "Subject",
  from: "from@email",
  templateId: "AC9734D4-CA8F-F111-B88F-0050568C835B",
  primitives: { name: "John" }
});
