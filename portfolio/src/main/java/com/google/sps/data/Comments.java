package com.google.sps.data;

public final class Comments{
    private final long id;
    private final String user_id;
    private final String name;
    private final String comment;
    private final long timestamp;

    public Comments(long id, String user_id, String name, String comment, long timestamp){
        this.id = id;
        this.user_id = user_id;
        this.name = name;
        this.comment = comment;
        this.timestamp = timestamp;
    }
}