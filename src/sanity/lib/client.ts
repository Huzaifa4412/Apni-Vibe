import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'
// import { formData } from '../../../Typing';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


// client
//   .listen('*[_type == "comment"]')
// .subscribe(update => console.log("Live update:", update))

// async function deleteAllComments() {
//   const comments = await client.fetch(`*[_type == "comment"]{_id}`);

//   const deletePromises = comments.map((comment: formData) =>
//     client.delete(comment._id)
//   );

//   await Promise.all(deletePromises);

//   console.log("✅ All comments deleted successfully!");
// }

// deleteAllComments();
