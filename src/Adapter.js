BASE_URL = 'https://api.unsplash.com/collections/416021/photos/';
CLIENT_ID = '42d24ab53c27c38ba70ba052d9238ee7412788d7c2bfd5d630f4c1b8317fa38a';
PER_PAGE = 10;

class Adapter {
	static getImages(pageNum) {
    return fetch(`${BASE_URL}?page=${pageNum}&per_page=${PER_PAGE}&client_id=${CLIENT_ID}`)
    .then(res => res.json())
  }
}
