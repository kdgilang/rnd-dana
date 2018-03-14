export const serialize = (obj) => {
  let s = []

  for (let item in obj) {
    const k = encodeURIComponent(item)
    const v = encodeURIComponent(obj[item] == null ? '' : obj[item])
    s.push(`${k}=${v}`)
  }

  return s.join('&')
}

const verbs = {

  GET (url, params) {
    return fetch(params ? `${url}?${params}` : url, {
      credentials: 'same-origin'
    })
  },

  POST (url, params) {
    return fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    })
  }
}

export const request = (url, method = 'GET', params = {}) => {
  return verbs[method](url, serialize(params))
    .then(res => {
      if (res.ok) {
        return res
      } else {
        throw new Error('Network Errror')
      }
    }).then(res => res.json())
}
