export async function logToWebhook(message: string) {
	const url = process.env.DISCORD_WEBHOOK_URL || "";

	const res = await fetch(url, {
		body: JSON.stringify({
			content: message,
		}),
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
	});
	const data = await res.json();
    console.log({data, ok: data.ok})
	return data;
}
