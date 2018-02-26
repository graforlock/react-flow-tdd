// @flow

export const request = async function request<T> (urlString: string, options: ?RequestOptions): Promise<T> {
  const result = await fetch(urlString, options || {})

  if (!result.ok) {
    throw new Error(result.statusText)
  }

  const json: T = await result.json()
  return json
}
