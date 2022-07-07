/**To enable passing parameters to a component we need to use withParams. 
 * We create a separate functional component so that we can decorate any component that needs parameters! 
 * */
import { useParams } from "react-router-dom";
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

export default withParams