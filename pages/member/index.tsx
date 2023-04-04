import type { NextPage } from 'next'
import Sidebar from '../../components/organisms/Sidebar'
import OverviewContent from '../../components/organisms/OverviewContent'

const MemberOverviewPage: NextPage = () => {
  return (
    <>
      {/* <!-- Overview --> */}
      <section className="overview overflow-auto">
        <Sidebar />
        <OverviewContent />
      </section>
    </>
  )
}

export default MemberOverviewPage
