//-- copyright
// OpenProject is an open source project management software.
// Copyright (C) the OpenProject GmbH
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See COPYRIGHT and LICENSE files for more details.
//++

import { ApiV3ResourceCollection } from 'core-app/core/apiv3/paths/apiv3-resource';
import { ApiV3PlaceholderUserPaths } from 'core-app/core/apiv3/endpoints/placeholder-users/apiv3-placeholder-user-paths';
import { PlaceholderUserResource } from 'core-app/features/hal/resources/placeholder-user-resource';
import { ApiV3Service } from 'core-app/core/apiv3/api-v3.service';
import { Observable } from 'rxjs';
import {
  ApiV3ListParameters,
  ApiV3ListResourceInterface,
  listParamsString,
} from 'core-app/core/apiv3/paths/apiv3-list-resource.interface';
import { CollectionResource } from 'core-app/features/hal/resources/collection-resource';

export class ApiV3PlaceholderUsersPaths
  extends ApiV3ResourceCollection<PlaceholderUserResource, ApiV3PlaceholderUserPaths>
  implements ApiV3ListResourceInterface<PlaceholderUserResource> {
  constructor(protected apiRoot:ApiV3Service,
    protected basePath:string) {
    super(apiRoot, basePath, 'placeholder_users', ApiV3PlaceholderUserPaths);
  }

  /**
   * Load a list of placeholder users with a given list parameter filter
   * @param params
   */
  public list(params?:ApiV3ListParameters):Observable<CollectionResource<PlaceholderUserResource>> {
    return this
      .halResourceService
      .get<CollectionResource<PlaceholderUserResource>>(this.path + listParamsString(params));
  }

  /**
   * Create a new PlaceholderUserResource
   *
   * @param resource
   */
  public post(resource:{ name:string }):Observable<PlaceholderUserResource> {
    return this
      .halResourceService
      .post<PlaceholderUserResource>(
      this.path,
      resource,
    );
  }
}
