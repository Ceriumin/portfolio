import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectButton, ProductButton } from '../index';
import { Projects, Products } from '../../utils/Projects'



function ProjectList ({maxItems}) {
    const filteredProjects = Projects
        .sort((a, b) => a.id - b.id)
        .slice(0, maxItems);

return (
  <div>
    {filteredProjects.map(project => (
      <div key={project.id} style={{marginBottom: '0.75rem'}}>
          <Link to={`/projects/${project.title.toLowerCase()}`}>
              <ProjectButton 
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  status={project.status}
                  onClick={project.onClick}
              />
          </Link>
      </div>
    ))}
  </div>
);
}

function ProductList ({maxItems}) {
  const filteredProducts = Products
        .sort((a, b) => a.id - b.id)
        .slice(0, maxItems);

  return (
    <div>
      {filteredProducts.map(product => (
        <div key={product.id} style={{marginBottom: '0.75rem'}}>
            <Link to={`/products/${product.title.toLowerCase()}`}>
                <ProductButton 
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    status={product.status}
                    onClick={product.onClick}
                />
            </Link>
        </div>
      ))}
    </div>
  );
}

export { ProjectList, ProductList }
