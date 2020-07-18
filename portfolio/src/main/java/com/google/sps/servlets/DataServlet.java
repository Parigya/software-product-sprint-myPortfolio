// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.sps.data.Comments;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {
    private List<String> comments;
    
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String json = new Gson().toJson(comments);
    System.out.println(json);
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
      String comment = getParameter(request, "comment-input", "");
      String name = getParameter(request, "name", "");
      Entity commentEntity = new Entity("Comments");
      commentEntity.setProperty("name",name);
      commentEntity.setProperty("comment",comment);
      DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
      datastore.put(commentEntity);
      response.sendRedirect("/index.html");
  }
  private String getParameter(HttpServletRequest request, String name, String defaultValue){
      String value = request.getParameter(name);
      if(value == null) return defaultValue;
      return value;
  }
  
}


