import { fetchAllListings } from '@api/strawberry'
import { toast } from 'react-hot-toast'

export default function StrawberryReducer(state, action) {
  switch (action.type) {
    case 'set_listings':
      toast.success('TA Listings updated!')
      return { ...state, listings: action.payload }
    case 'sort_by_course_name':
      var sorted_listings = [...state.listings]
      sorted_listings.sort((a, b) => (a.title > b.title ? 1 : -1))
      return { ...state, listings: sorted_listings }
    case 'sort_by_needed':
      var sorted_listings = [...state.listings]
      sorted_listings.sort((a, b) => (a.needed < b.needed ? 1 : -1))
      return { ...state, listings: sorted_listings }
    case 'sort_by_applied':
      var sorted_listings = [...state.listings]
      sorted_listings.sort((a, b) => (a.applied < b.applied ? 1 : -1))
      return { ...state, listings: sorted_listings }
    case 'sort_by_accepted':
      var sorted_listings = [...state.listings]
      sorted_listings.sort((a, b) => (a.accepted < b.accepted ? 1 : -1))
      return { ...state, listings: sorted_listings }
    case 'sort_by_status':
      var sorted_listings = [...state.listings]
      var preferred_order = [
        'diterima',
        'direkomendasikan',
        'melamar',
        '-------',
      ]
      sorted_listings.sort((a, b) =>
        preferred_order.indexOf(a.status) > preferred_order.indexOf(b.status)
          ? 1
          : -1
      )
      return { ...state, listings: sorted_listings }
    default:
      return state
  }
}
