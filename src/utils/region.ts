import { headers } from 'next/headers';

export async function getRegion() {
  const headersList = await headers();

  const acceptLanguage = headersList.get('accept-language');

  const locale = acceptLanguage?.split(';')[0]?.split(',')[1];

  return locale ? new Intl.Locale(locale).region : undefined;
}
