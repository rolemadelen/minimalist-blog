export const createOgImage = ({
  title,
  meta,
}: {
  title: string
  meta: string
}) =>
  [
    `https://res.cloudinary.com/dtxawyaxa/image/upload`,
    `w_1600,h_836,q_100`,

    // Logo?
    `l_text:Roboto_48:${e('>$ rolemadelen')},co_rgb:ffe4e699,c_fit,w_1300`,
    // Positioning
    `fl_layer_apply,g_north_west,x_100,y_100`,

    // TITLE
    `l_text:Roboto_72_bold:${e(title)},co_rgb:ffe4e6,c_fit,w_1300,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_190`,

    // META
    `l_text:Roboto_48:${e(meta)},co_rgb:ffe4e680,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_100`,

    // Base Layer
    `base-layer.png`,
  ].join('/')

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str))
