import ReachedItem from '../../molecules/ReachedItem'

const Reached = () => {
  return (
    //   {/* <!-- Reached --> */}
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem value="290M+" title="Players Top Up" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <ReachedItem value="12.500" title="Games Available" className="ms-lg-35" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <ReachedItem value="99,9%" title="Happy Players" className="ms-lg-35" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <ReachedItem value="4.7" title="Rating Worldwide" className="ms-lg-35" />
        </div>
      </div>
    </section>
  )
}

export default Reached
