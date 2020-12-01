import {MainLayout} from '../../components/MainLayout'
import { getAllProjects } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import Projects from "../../components/projects/projects"
import {useSelector,useDispatch} from "react-redux";
import {actionGetProjects} from "../../redux/actions/actions";

export default function Index({ Projects: { edges ,pageInfo}, preview }) {
    const {language} = useSelector(state=>state.app)
    const dispatch = useDispatch()
    const {projects} = useSelector(state=>state.projects)
    const loadMore=(first,
                    after,
                    last,
                    before)=>{
        async function load_SPA_data() {
            const variables={
                first: first,
                last: last,
                after: after,
                before: before
            }
            dispatch(actionGetProjects(variables,preview))
            console.log(variables,projects)
        }

        load_SPA_data()
    }
    return (
        <>
            <MainLayout preview={preview}>
                <div>
                    <h2>Post List</h2>
                    {edges ? (
                        <div>
                            <ul>
                                {edges.map(edge => {
                                    const { node } = edge;
                                    return (
                                        <li
                                            key={node.id}
                                            dangerouslySetInnerHTML={{ __html: node.title }}
                                        />
                                    );
                                })}
                            </ul>
                            <div>
                                {pageInfo.hasPreviousPage ? (
                                    <button
                                        onClick={() => {
                                            fetchMore({
                                                variables: {
                                                    first: null,
                                                    after: null,
                                                    last: 10,
                                                    before: pageInfo.startCursor || null
                                                },
                                                updateQuery
                                            });
                                        }}
                                    >
                                        Previous
                                    </button>
                                ) : null}
                                {pageInfo.hasNextPage ? (
                                    <button
                                        onClick={() => {
                                            loadMore(1,pageInfo.endCursor || null,null,null)
                                        }}
                                    >
                                        Next
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    ) : (
                        <div>No posts were found...</div>
                    )}
                </div>
            </MainLayout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const variables={
        first: 1,
        last: null,
        after: null,
        before: null
    }
    const Projects = await getAllProjects(variables,preview)
    return {
        props: { Projects, preview },
    }
}
