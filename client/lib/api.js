async function fetchAPI(query, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });

  // error handling work
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function sendMail(subject, body, mutationId = 'contact') {
  const fromAddress = 'noreply@yourwebsite.com';
  const toAddress = 'alexandernsutherland@gmail.com';
  console.log('called');
  const data = await fetchAPI(
    `
    mutation SEND_EMAIL {
      sendEmail(
      input: {
      to: “test@test.com”
      from: “test@test.com”
      subject: “test email”
      body: “test email”
      clientMutationId: “test”
      }
      ) {
      origin
      sent
      message
      }
      }
	`,
    {
      variables: {
        input: {
          clientMutationId: mutationId,
          from: fromAddress,
          to: toAddress,
          body: body,
          subject: subject,
        },
      },
    }
  );

  console.log(data);

  return data?.sendEmail;
}