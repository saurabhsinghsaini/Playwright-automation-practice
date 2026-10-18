import { test } from '@playwright/test';
import OpenAI from 'openai';
import 'dotenv/config';

test('AI Connection Test', async () => {

    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    const response = await client.responses.create({
        model: 'gpt-5-mini',
        input: 'You are a QA assistant. Give me 3 test scenarios for a login page.'
    });

    console.log('\nAI RESPONSE:\n');
    console.log(response.output_text);
});