// @flow

export const request = async function request<T> (urlString: string, config: ?RequestOptions): Promise<T> {
  const result = await fetch(urlString, config || {})

  if (!result.ok) {
    throw new Error(result.statusText)
  }

  const json: T = await result.json()
  return json
}
