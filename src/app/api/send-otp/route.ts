export async function POST(req: Request) {

  const { mobile } = await req.json()

  const response = await fetch("https://control.msg91.com/api/v5/otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authkey": process.env.MSG91_AUTH_KEY as string
    },
    body: JSON.stringify({
      mobile: "91" + mobile,
      template_id: process.env.MSG91_TEMPLATE_ID,
      otp_length: 4
    })
  })

  const data = await response.json()

  return Response.json(data)

}