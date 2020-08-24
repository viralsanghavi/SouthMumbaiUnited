import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import InstagramEmbed from 'react-instagram-embed';


function Instafeed() {
    const [urls, setUrls] = useState([])
    async function instagramPhotos() {
        // It will contain our photos' links
        const res = []

        try {
            const userInfoSource = await Axios.get('https://www.instagram.com/southmumbaiunitedfc/')

            // userInfoSource.data contains the HTML from Axios
            const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)
            const userInfo = JSON.parse(jsonObject)
            // Retrieve only the first 10 results
            const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 10)

            for (let media of mediaArray) {
                const node = media.node

                // Process only if is an image
                if ((node.__typename && node.__typename !== 'GraphImage')) {
                    continue
                }

                // Push the thumbnail src in the array
                res.push(node.shortcode)

                setUrls(res.map(ur => ur))
            }
        } catch (e) {
            console.error('Unable to retrieve photos. Reason: ' + e.toString())
        }

        return res
    }

    useEffect(() => { instagramPhotos() }, [])
    return (
        <div className="overflow__feedInsta">
            {urls.length > 0 && urls.map(book =>
                <div className="overflow__feed" key={book}>
                    <InstagramEmbed
                        url={`https://www.instagram.com/p/${book}/`}
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                </div>
            )}

        </div>
    )
}

export default Instafeed
