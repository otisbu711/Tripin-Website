import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Tripin <contact@tripintravelapp.com>',
      to: 'contact@tripintravelapp.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#fff;">
          <h2 style="font-size:20px;font-weight:600;margin-bottom:24px;color:#1a0c0a;">New contact message</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0e8e6;color:#9b5850;font-size:13px;width:80px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0e8e6;color:#1a0c0a;font-size:15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0e8e6;color:#9b5850;font-size:13px;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0e8e6;font-size:15px;">
                <a href="mailto:${email}" style="color:#e84040;text-decoration:none;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top:24px;">
            <p style="color:#9b5850;font-size:13px;margin-bottom:8px;">Message</p>
            <p style="color:#1a0c0a;font-size:15px;line-height:1.6;white-space:pre-wrap;">${message}</p>
          </div>
          <hr style="border:none;border-top:1px solid #f0e8e6;margin:32px 0;" />
          <p style="color:#9b5850;font-size:12px;">Sent via tripintravelapp.com/contact</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
